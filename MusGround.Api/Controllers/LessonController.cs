using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Cors;
using Microsoft.AspNet.Mvc;
using MusGround.Api.Models;

namespace MusGround.Api.Controllers {
    [Route("api/[controller]")]
    [EnableCors("AllowAll")]
    public class LessonController : Controller {
        public static List<Lesson> Lessons = new List<Lesson> {
            new Lesson {
                Id = 1,
                Name = "First lesson",
                Text = "First lesson text",
                Description = "First lesson description",
                IsModerated = true,
                PrevLessonId = null,
                NextLessonId = 2
            },
            new Lesson {
                Id = 2,
                Name = "Second lesson",
                Text = "Second lesson text",
                Description = "Second lesson description",
                IsModerated = true,
                PrevLessonId = 1,
                NextLessonId = 3
            },
            new Lesson {
                Id = 3,
                Name = "Third lesson",
                Text = "Third lesson text",
                Description = "Third lesson description",
                IsModerated = false,
                PrevLessonId = 2,
                NextLessonId = 4
            },
            new Lesson {
                Id = 4,
                Name = "Fourth lesson",
                Text = "Fourth lesson text",
                Description = "Fourth lesson description",
                IsModerated = true,
                PrevLessonId = 3,
                NextLessonId = 5
            },
            new Lesson {
                Id = 5,
                Name = "Fifth lesson",
                Text = "Fifth lesson text",
                Description = "Fifth lesson description",
                IsModerated = false,
                PrevLessonId = 4,
                NextLessonId = null
            }
        };
        [HttpGet]
        public IEnumerable<Lesson> Get() {
            return Lessons;
        }
        [HttpGet("{id}")]
        public Lesson Get(int id) {
            return Lessons.FirstOrDefault(l => l.Id == id);
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] PostLesson lesson) {
            var changingLesson = Lessons.Single(l => l.Id == id);
            changingLesson.Name = lesson.Name;
            changingLesson.Text = lesson.Text;
            changingLesson.Description = lesson.Description;
            changingLesson.IsModerated = lesson.IsModerated;
            changingLesson.PrevLessonId = lesson.PrevLessonId;
            changingLesson.NextLessonId = lesson.NextLessonId;
        }
        [HttpPost]
        public int Post([FromBody] PostLesson lesson) {
            var newLessonId = Lessons.Select(l => l.Id).Max() + 1;
            Lessons.Add(new Lesson {
                Id = newLessonId,
                Name = lesson.Name,
                Text = lesson.Text,
                Description = lesson.Description,
                IsModerated = lesson.IsModerated,
                PrevLessonId = lesson.PrevLessonId,
                NextLessonId = lesson.NextLessonId,
            });
            return newLessonId;
        }
    }
}