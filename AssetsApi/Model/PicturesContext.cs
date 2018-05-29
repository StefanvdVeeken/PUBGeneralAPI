
using Microsoft.EntityFrameworkCore;

namespace Model{
    public class PicturesContext : DbContext
    {
        public PicturesContext (DbContextOptions<PicturesContext> options): base(options)
        {
        }

            public DbSet<Picture> Images { get; set; }
     }
}

