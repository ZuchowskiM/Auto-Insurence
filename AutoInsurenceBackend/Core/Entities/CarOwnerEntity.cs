namespace AutoInsurenceBackend.Core.Entities
{
    public class CarOwnerEntity : BaseEntity
    {
        public required string Name { get; set; }

        public required string Surname { get; set; }

        public ICollection<CarEntity> OwnedCars { get; set; } = [];
    }
}
