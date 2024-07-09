using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Repositories;
using System.Reflection.Emit;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResumeController : ControllerBase
    {
        private readonly IResumeRepository resumeRepository;

        public ResumeController(IResumeRepository resumeRepository)
        {
            this.resumeRepository = resumeRepository;
        }

        [HttpGet("header")]
        public HeaderData GetHeaderData()
        {
            return resumeRepository.GetHeaderData();
        }

        [HttpGet("skills")]
        public string[] GetSkills()
        {
            return resumeRepository.GetSkills();
        }

        [HttpGet("experiences")]
        public Experience[] GetExperiences()
        {
            return resumeRepository.GetExperiences();
        }

        [HttpGet("internships")]
        public Internship[] GetInternships()
        {
            return resumeRepository.GetInternships();
        }

        [HttpGet("education")]
        public Education GetEducation()
        {
            return resumeRepository.GetEducation();
        }
    }
}
