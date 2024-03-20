namespace AutoInsurenceBackend.Core.Dtos.Car
{
    public class CarGetDto
    {
        public long ID { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public required string Brand { get; set; }

        public required string Model { get; set; }

        public int ProductionYear { get; set; }

        public required string OwnerName { get; set; }

        public required long CarOwnerId { get; set; }
    }
}
