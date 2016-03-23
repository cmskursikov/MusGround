using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusGround.Domain.Models {
    [Table("lesson", Schema = "public")]
    public class Lesson {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("text")]
        public string Text { get; set; }
        [Column("description")]
        public string Description { get; set; }
        [Column("ismoderated")]
        public bool IsModerated { get; set; }
        [Column("prevlessonid")]
        public int? PrevLessonId { get; set; }
        [Column("nextlessonid")]
        public int? NextLessonId { get; set; }
    }
}