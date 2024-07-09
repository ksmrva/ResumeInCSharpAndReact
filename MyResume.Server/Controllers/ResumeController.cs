using Microsoft.AspNetCore.Mvc;
using MyResume.Server.Models;
using MyResume.Server.Repositories;
using System.Reflection.Emit;

namespace MyResume.Server.Controllers
{
    [ApiController]
    [Route("resume")]
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
