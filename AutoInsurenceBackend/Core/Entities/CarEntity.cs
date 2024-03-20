namespace AutoInsurenceBackend.Core.Entities
{
    public class CarEntity : BaseEntity
    {
        public required string Brand { get; set; }

        public required string Model { get; set; }

        public int ProductionYear { get; set; }

        public required long CarOwnerId { get; set; }

        public required CarOwnerEntity CarOwner { get; set; }
    }
}
