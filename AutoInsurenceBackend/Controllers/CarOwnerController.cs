using AutoInsurenceBackend.Core.Context;
using AutoInsurenceBackend.Core.Dtos.CarOwner;
using AutoInsurenceBackend.Core.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AutoInsurenceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarOwnerController : ControllerBase
    {
        private ApplicationDbContext _context { get; }

        private IMapper _mapper { get; }

        public CarOwnerController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> CreateCarOwner([FromBody] CarOwnerCreateDto dto)
        {
            CarOwnerEntity newCarOwner = _mapper.Map<CarOwnerEntity>(dto);
            await _context.CarOwnerEntities.AddAsync(newCarOwner);
            await _context.SaveChangesAsync();
            return Ok("Success"); 
        }

        [HttpGet]
        [Route("Get")]
        public async Task<ActionResult<IEnumerable<CarOwnerGetDto>>> getCarOwners()
        {
            var carOwners = await _context.CarOwnerEntities.ToListAsync();
            var carOwnersDtos = _mapper.Map<IEnumerable<CarOwnerGetDto>>(carOwners);
            return Ok(carOwnersDtos);
        }
    }
}
