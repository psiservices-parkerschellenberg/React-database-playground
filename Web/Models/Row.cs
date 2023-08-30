using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Models
{
    public class Row
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }
        [Display(Name = "First")]
        
        public string? MiddleName { get; set; }
        [Display(Name = "Middle")]
        
        [Required]
        public string LastName { get; set; }
        [Display(Name = "Last")]

        [DataType(DataType.Date)]
        [Required]
        public DateTime ExamDate { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        [Required]
        public decimal Price { get; set; }
        
        public Row()
        {
            FirstName = string.Empty;
            LastName = string.Empty;
        }
    }
}