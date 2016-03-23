using Microsoft.Data.Entity;
using MusGround.Domain.Models;

namespace MusGround.Domain {
    public class MusgroundDbContext : DbContext {
        public DbSet<Lesson> Lessons { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder builder) {
            builder.UseNpgsql(@"Username=postgres;Password=postgres;Host=localhost;Port=5432;Database=test;");
        }
    }
}