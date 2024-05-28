using Microsoft.EntityFrameworkCore;
using PapaleguasAPI.Models;

namespace PapaleguasAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}
