
using Microsoft.EntityFrameworkCore;

namespace Model{
    public class PicturesContext : DbContext
    {
        public PicturesContext (DbContextOptions<PicturesContext> options): base(options)
        {
        }
        public DbSet<Picture> Maps { get; set; }
        public DbSet<Picture> Ammunition { get; set; }
        public DbSet<Picture> Equipment { get; set; }
        public DbSet<Picture> Attachments { get; set; }
        public DbSet<Picture> UseItems { get; set; }
        public DbSet<Picture> Weapons { get; set; }
    }
}

