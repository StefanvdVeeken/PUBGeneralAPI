
using System.Collections.Generic;
using System.Linq;

namespace Model
{
    public class DBIntitializer
    {
        public static void Initialize(LibraryContext context)
        {
            List<Picture> Maps = new List<Picture>();
            List<Picture> Ammunition = new List<Picture>();
            List<Picture> Attachments = new List<Picture>();
            List<Picture> Equipment = new List<Picture>();
            List<Picture> Use = new List<Picture>();
            List<Picture> Weapons = new List<Picture>();
            //Create the db if not yet exists
            context.Database.EnsureCreated();
            if (!context.Pictures.Any())
            {
                foreach (string maps in System.IO.Directory.GetFiles("./assets/Maps"))
                {
                    Maps.Add(new Picture(){
                        Name = maps,
                        ByteValue = System.IO.File.ReadAllBytes(maps),
                        Type = "map"
                    });
                }

                foreach (string ammo in System.IO.Directory.GetFiles("./assets/Ammunition/None"))
                {
                    Ammunition.Add(new Picture(){
                        Name = ammo,
                        ByteValue = System.IO.File.ReadAllBytes(ammo),
                        Type = "ammunition"
                    });
                }

                foreach (string attachment in System.IO.Directory.GetFiles("./assets/Attachment/None"))
                {
                    Attachments.Add(new Picture(){
                        Name = attachment,
                        ByteValue = System.IO.File.ReadAllBytes(attachment),
                        Type="attachment"
                    });
                }

                foreach (string gear in System.IO.Directory.GetFiles("./assets/Attachment/None"))
                {
                    Equipment.Add(new Picture(){
                        Name = gear,
                        ByteValue = System.IO.File.ReadAllBytes(gear),
                        Type="equipment"
                    });
                }

                foreach (string item in System.IO.Directory.GetFiles("./assets/Attachment/None"))
                {
                    Use.Add(new Picture(){
                        Name = item,
                        ByteValue = System.IO.File.ReadAllBytes(item),
                        Type="use"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Attachment/None"))
                {
                    Weapons.Add(new Picture(){
                        Name = weapon,
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type="attachment"
                    });
                }
               
            }
            //Are there already books present ?
            // if (!context.Books.Any())
            // {
            //     var suzanne = new Author()
            //     {
            //         Name = "Collins",
            //         FirstName = "Suzanne"
            //     };
            //     context.Authors.Add(suzanne);
            //     var george = new Author()
            //     {
            //         Name = "Orwell",
            //         FirstName = "George"
            //     };
            //     context.Authors.Add(george);

            //     //Create new book
            //     var bk = new Book()
            //     {
            //         Title = "The Hunger Games",
            //         ISBN = "0439023483",
            //         Pages = 374,
            //         Genre = "Adventure",
            //         Author = suzanne
            //     };
            //     //Add the book to the collection of books
            //     context.Books.Add(bk);
            //     bk = new Book()
            //     {
            //         Title = "Animal Farm",
            //         ISBN = "0452284244",
            //         Pages = 122,
            //         Genre = "Mystery",
            //         Author = george
            //     };
            //     context.Books.Add(bk);
            //     //Save all the changes to the DB
            //     context.SaveChanges();
            // }
            context.SaveChanges();
        }
    }
}




