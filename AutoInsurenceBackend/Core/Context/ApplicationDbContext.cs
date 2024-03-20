using AutoInsurenceBackend.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace AutoInsurenceBackend.Core.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<CarEntity> Cars { get; set; }

        public DbSet<CarOwnerEntity> CarOwnerEntities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<CarEntity>()
                .HasOne(car => car.CarOwner)
                .WithMany(carOwner => carOwner.OwnedCars)
                .HasForeignKey(car => car.CarOwnerId);
        }
    }
}
