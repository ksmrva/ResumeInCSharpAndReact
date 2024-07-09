namespace ReactApp1.Server.Models
{
    public record Experience
    {
        public required string CompanyName { get; init; }
        public required string City { get; init; }
        public required string State { get; init; }
        public required string Role { get; init; }
        public required string FromDate { get; init; }
        public required string ToDate { get; init; }
        public required string[] Responsibilities { get; init; }
    }
}
