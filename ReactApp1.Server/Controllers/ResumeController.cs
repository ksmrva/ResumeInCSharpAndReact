using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using System.Reflection.Emit;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResumeController : ControllerBase
    {
        private static readonly HeaderData HeaderData = new HeaderData()
        {

            Address1 = "7929 Wistar Woods Court",
            City = "Richmond",
            State = "VA",
            ZipCode = "23228",
            PhoneNumber = "804-221-1524",
            Email = "ksmrva@gmail.com"
        };

        private static readonly IEnumerable<String> Skills = new[]
        {
            "C#", "React",
            "Java (Spring, Hibernate, Maven)", "Angular", "SQL (Oracle, MySQL, PostgresSQL)",
            "AWS (EC2, ECS)", "REST + SOAP", "Git + SVN",
            "Python", "NoSQL (MongoDB, DynamoDB)", "Agile Development",
            "Docker", "Rust", "Ruby",
            "Selenium", "CUDA"

        };

        private static readonly IEnumerable<Experience> Experiences = new[]
        {
            new Experience{ CompanyName = "Kinsale Insurance", City = "Richmond", State = "VA",
                            Role = "Lead Software Developer", FromDate = "08/2016", ToDate = "04/2024",
                            Responsibilities = ["Mentored all junior developers that entered the company; they started on my team where I trained them in best practices and the structures/patterns of our code until they were ready to join a feature team",
                                                "Key contributor in building an internal Policy Processing software suite to remove the reliance on a major third party insurance software package called Edge, saving 100s of thousands in annual fees",
                                                "Was team lead for the level 3 production support team which grew to be 15 members, 11 of which were developers",
                                                "Played a major role in helping the company transition from being exclusively on-prem to having about 80% of their applications and infrastructure hosted on AWS",
                                                "Led efforts to remediate vulnerabilities in 100+ internal applications, both front-end and back-end, and improved the security processes surrounding application builds and deployments",
                                                "In addition to being a full-stack developer, performed significant QA testing duties and helped to establish testing standards and regression suites to ensure consistency and robustness"
                                               ] 
            },
            new Experience{ CompanyName = "Royall & Company", City = "Richmond", State = "VA",
                            Role = "Software Developer", FromDate = "01/2014", ToDate = "08/2016",
                            Responsibilities = ["Developed a large-scale, distributed, Java-based application to replace ETL processes across the entire company, reducing support needs by over 50% and greatly improving performance",
                                                "Created REST APIs to support database CRUD operations across infrastructure which heavily using MongoDB, PostgreSQL, and Amazon S3",
                                                "Refactored a large number of legacy systems in order to update them to current generation structures, while also improving the security and consistency of the code",
                                                "Stumbled upon several areas of unnecessary manual work and automated these processes which alleviated upwards of 4 hours of work every week in multiple departments"
                                               ] 
            },
            new Experience{ CompanyName = "Bank of America", City = "Richmond", State = "VA",
                            Role = "Teller", FromDate = "06/2009", ToDate = "05/2013",
                            Responsibilities = ["Managed and was responsible for the Teller Cash Dispenser, ensuring that funds of over $120,000 were accounted for daily",
                                                "Received, disbursed, and kept records of money and negotiable instruments involved in financial transactions",
                                                "Explained, promoted, and sold products and services such as new accounts, savings bonds, and credit cards"
                                               ] 
            }
        };

        [HttpGet("header")]
        public HeaderData GetHeaderData()
        {
            return HeaderData;
        }

        [HttpGet("skills")]
        public string[] GetSkills()
        {
            return Skills.ToArray();
        }

        [HttpGet("experiences")]
        public Experience[] GetExperiences()
        {
            return Experiences.ToArray();
        }
    }
}
