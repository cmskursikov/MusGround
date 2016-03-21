namespace MusGround.Api.Models {
    public class Lesson {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }
        public bool IsModerated { get; set; }
        public int? PrevLessonId { get; set; }
        public int? NextLessonId { get; set; }
    }
    public class PostLesson {
        public string Name { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }
        public bool IsModerated { get; set; }
        public int? PrevLessonId { get; set; }
        public int? NextLessonId { get; set; }
    }
}