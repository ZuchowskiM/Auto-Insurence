using AutoInsurenceBackend.Core.Dtos.Car;
using AutoInsurenceBackend.Core.Dtos.CarOwner;
using AutoInsurenceBackend.Core.Entities;
using AutoMapper;

namespace AutoInsurenceBackend.Core.AutoMapperConfig
{
    public class AutoMapperConfigProfile : Profile
    {
        public AutoMapperConfigProfile() {

            // CarOwner
            CreateMap<CarOwnerCreateDto, CarOwnerEntity>();
            CreateMap<CarOwnerEntity, CarOwnerGetDto>();

            //Car
            CreateMap<CarCreateDto, CarEntity>();
            CreateMap<CarEntity, CarGetDto>()
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.CarOwner.Name));
        }
    }
}
