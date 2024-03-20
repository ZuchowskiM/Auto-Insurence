using AutoInsurenceBackend.Core.Context;
using AutoInsurenceBackend.Core.Dtos.Car;
using AutoInsurenceBackend.Core.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AutoInsurenceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private ApplicationDbContext _context { get; }

        private IMapper _mapper { get; }

        public CarController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateCar([FromBody] CarCreateDto dto) {
            CarEntity carEntity = _mapper.Map<CarEntity>(dto);
            await _context.Cars.AddAsync(carEntity);
            await _context.SaveChangesAsync();
            return Ok("Success");
        }

        [HttpGet]
        [Route("Get")]
        public async Task<ActionResult<IEnumerable<CarGetDto>>> getCars()
        {
            var cars = await _context.Cars.Include(car => car.CarOwner).ToListAsync();
            var carsDtos = _mapper.Map<IEnumerable<CarGetDto>>(cars);
            return Ok(carsDtos);
        }

    }
}
