using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Insight.Database;
using Web.Models;
using System.Data.SqlClient;
using System.Data;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RowsController : ControllerBase
    {
        private readonly IDbConnection _dbConnection;

        public RowsController(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            _dbConnection = new SqlConnection(connectionString);
        }

        // GET: api/Rows
        [HttpGet]
        public IActionResult Get()
        {
            var rows = _dbConnection.Query<Row>("GetAllRows");
            return Ok(rows);
        }

        // GET api/Rows/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var row = _dbConnection.Query<Row>("GetRowById", new { Id = id });
            if (row == null || row.Count == 0)
            {
                return NotFound($"A row with ID {id} was not found.");
            }
            return Ok(row);
        }

        // POST api/Rows
        [HttpPost]
        public IActionResult Post([FromBody] RowNoID newRow)
        {
            _dbConnection.Execute("AddRow", newRow);
            return Ok("New row added successfully.");
        }

        // PUT api/Rows/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] RowNoID request)
        {
            var row = _dbConnection.Query<Row>("GetRowById", new { Id = id });
            if (row == null || row.Count == 0)
            {
                return NotFound($"A row with ID {id} was not found.");
            }

            var updatedRow = new Row
            {
                Id = id,
                FirstName = request.FirstName,
                MiddleName = request.MiddleName,
                LastName = request.LastName,
                ExamDate = request.ExamDate,
                Price = request.Price
            };
            _dbConnection.Execute("UpdateRow", updatedRow);
            return Ok($"Row with ID {id} updated successfully.");
        }

        // DELETE api/Rows/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var row = _dbConnection.Query<Row>("GetRowById", new { Id = id });
            if (row == null || row.Count == 0)
            {
                return NotFound($"A row with ID {id} was not found.");
            }

            _dbConnection.Execute("DeleteRowById", new { Id = id });
            return Ok($"Row with ID {id} deleted successfully.");
        }
    }
}
