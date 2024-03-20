namespace AutoInsurenceBackend.Core.Dtos.Car
{
    public class CarCreateDto
    {
        public required string Brand { get; set; }

        public required string Model { get; set; }

        public int ProductionYear { get; set; }

        public required long CarOwnerId { get; set; }
    }
}
