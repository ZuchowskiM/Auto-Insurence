namespace AutoInsurenceBackend.Core.Dtos.CarOwner
{
    public class CarOwnerGetDto
    {
        public long ID { get; set; }

        public DateTime CreatedAt { get; set; }

        public required string Name { get; set; }

        public required string Surname { get; set; }
    }
}
