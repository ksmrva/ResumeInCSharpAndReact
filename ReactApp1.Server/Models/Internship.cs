namespace ReactApp1.Server.Models
{
    public class Internship
    {
        public required string SchoolName { get; set; }
        public required string City { get; set; }
        public required string State { get; set; }
        public required string Role { get; set; }
        public required string FromDate { get; set; }
        public required string ToDate { get; set; }
        public required string[] Responsibilities { get; set; }
    }
}
