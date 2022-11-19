using Database;
using EntitiesAndModels.Entities;

namespace BusinessLogic
{
    public interface ITeacherService
    {
        Teacher AddTeacher(Teacher teacher);
        IEnumerable<Teacher> GetTeachersWithDepartment(int id);
        Teacher GetTeacherWithId(int id);
    }
    public class TeacherService : ITeacherService
    {
        private readonly UniversityContext _universityContext;
        public TeacherService(UniversityContext universityContext)
        {
            _universityContext = universityContext;
        }
        public Teacher AddTeacher(Teacher teacher)
        {
            try
            {
                _universityContext.Teachers.Add(teacher);
                _universityContext.SaveChanges();
                return teacher;
            }
            catch
            {
                return null;
            }

        }
        public IEnumerable<Teacher> GetTeachersWithDepartment(int id)
        {
           var teachers= _universityContext.Teachers.Where(x => x.Department == id);
            return teachers;
        }
        public Teacher GetTeacherWithId(int id)
        {
            return _universityContext.Teachers.Single(x => x.Id == id);
        }
    }
}
