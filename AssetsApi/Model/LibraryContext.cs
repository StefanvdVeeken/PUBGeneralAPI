
using Microsoft.EntityFrameworkCore;

namespace Model{
    public class LibraryContext : DbContext
    {
        public LibraryContext (DbContextOptions<LibraryContext> options): base(options)
        {
        }
        public DbSet<Picture> Pictures { get; set; }
    }
}

