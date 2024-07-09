using ReactApp1.Server.Models;

namespace ReactApp1.Server.Repositories
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
