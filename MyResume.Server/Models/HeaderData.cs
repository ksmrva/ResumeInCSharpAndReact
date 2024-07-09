namespace MyResume.Server.Models
{
    public record HeaderData
    {
        public required string Address1 { get; init; }
        public required string City { get; init; }
        public required string State { get; init; }
        public required string ZipCode { get; init; }
        public required string PhoneNumber { get; init; }
        public required string Email { get; init; }
    }
}