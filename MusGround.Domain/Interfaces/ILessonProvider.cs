using MusGround.Domain.Models;
using System.Collections.Generic;

namespace MusGround.Domain.Interfaces {
    interface ILessonProvider {
        List<Lesson> GetAllLessons();
        Lesson GetLessonById(int id);
        int AddLesson(Lesson role);
        bool DeleteLessonById(int id);
    }
}
