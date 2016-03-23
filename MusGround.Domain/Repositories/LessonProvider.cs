using System.Collections.Generic;
using MusGround.Domain.Models;
using System.Linq;
using MusGround.Domain.Interfaces;

namespace MusGround.Domain.Providers {
    public class LessonProvider : ILessonProvider {
        public int AddLesson(Lesson lesson) {
            var newLesson = new Lesson {
                Name = lesson.Name
            };
            using (var context = new MusgroundDbContext()) {
                context.Lessons.Add(newLesson);
                context.SaveChanges();
                return newLesson.Id;
            }
        }
        public bool DeleteLessonById(int id) {
            var lesson = new Lesson {
                Id = id
            };
            using (var context = new MusgroundDbContext()) {
                context.Lessons.Attach(lesson);
                context.Lessons.Remove(lesson);
                return context.SaveChanges() != 0;
            }
        }
        public List<Lesson> GetAllLessons() {
            using (var context = new MusgroundDbContext()) {
                return context.Lessons.ToList();
            }
        }
        public Lesson GetLessonById(int id) {
            using (var context = new MusgroundDbContext()) {
                return context.Lessons.Single(l => l.Id == id);
            }
        }
    }
}
