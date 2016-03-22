using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;

namespace MusGround.Api {
    public class Startup {
        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json");
            if(env.IsEnvironment("Development")) {
                builder.AddApplicationInsightsSettings(developerMode: true);
            }
            builder.AddEnvironmentVariables();
            Configuration = builder.Build().ReloadOnChanged("appsettings.json");
        }
        public IConfigurationRoot Configuration { get; set; }
        public void ConfigureServices(IServiceCollection services) {
            services.AddApplicationInsightsTelemetry(Configuration);
            services.AddMvc(options => {
                var formatter = new JsonOutputFormatter {
                    SerializerSettings = { ContractResolver = new CamelCasePropertyNamesContractResolver() }
                };
                options.OutputFormatters.Insert(0, formatter);
            });
            services.AddCors(options => {
                options.AddPolicy("AllowAll", builder => builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod());
            });
        }
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseIISPlatformHandler();
            app.UseApplicationInsightsRequestTelemetry();
            app.UseApplicationInsightsExceptionTelemetry();
            app.UseStaticFiles();
            app.UseMvc();
        }
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}