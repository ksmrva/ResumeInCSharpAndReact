namespace MyResume.Server.Models
{
    public record Education
    {
        public required string SchoolName { get; init; }
        public required string City { get; init; }
        public required string State { get; init; }
        public required string Degree { get; init; }
        public required string GraduationDate { get; init; }
        public required string GPA { get; init; }
    }
}
