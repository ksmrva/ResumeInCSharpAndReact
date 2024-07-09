using MyResume.Server.Models;

namespace MyResume.Server.Repositories
{
    public interface IResumeRepository
    {
        public HeaderData GetHeaderData();
        public string[] GetSkills();
        public Experience[] GetExperiences();
        public Internship[] GetInternships();
        public Education GetEducation();
    }
}
