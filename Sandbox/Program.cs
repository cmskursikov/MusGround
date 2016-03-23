using MusGround.Domain.Providers;

namespace Sandbox {
    public class Program {
        public static void Main(string[] args) {
            var q = new LessonProvider().GetAllLessons();
        }
    }
}