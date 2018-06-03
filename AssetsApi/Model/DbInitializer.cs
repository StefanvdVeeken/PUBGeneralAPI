
using System.Collections.Generic;
using System.Linq;

namespace Model
{
    public class DBIntitializer
    {
        public static void Initialize(PicturesContext context)
        {
            //Create the db if not yet exists
            List<string> clist = new List<string>(new string[]{
                "Albania",
                "Andorra",
                "Armenia",
                "Austria",
                "Azerbaijan",
                "Belarus",
                "Belgium",
                "Bosnia and Herzegovina",
                "Bulgaria",
                "Croatia",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Estonia",
                "Finland",
                "France",
                "Georgia",
                "Germany",
                "Greece",
                "Hungary",
                "Iceland",
                "Ireland",
                "Italy",
                "Kazakhstan",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macedonia",
                "Malta",
                "Moldova",
                "Monaco",
                "Montenegro",
                "Netherlands",
                "Norway",
                "Poland",
                "Portugal",
                "Romania",
                "Russia",
                "San Marino",
                "Serbia",
                "Slovakia",
                "Slovenia",
                "Spain",
                "Sweden",
                "Switzerland",
                "Turkey",
                "Ukraine",
                "United Kingdom",
                "Vatican City",
            });
            context.Database.EnsureCreated();
            
            if(!context.Countries.Any()){
                foreach(string c in clist){
                    context.Countries.Add(new Country()
                    {
                        Name = c
                    });
                }
            }

            if (!context.Images.Any())
            {
                foreach (string maps in System.IO.Directory.GetFiles("./assets/Maps"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = maps.Substring(14, (maps.Length - 14 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(maps),
                        Type = "map"
                    });
                }

                foreach (string ammo in System.IO.Directory.GetFiles("./assets/Item/Ammunition/None"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = ammo.Substring(30, (ammo.Length - 30 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(ammo),
                        Type = "ammunition"
                    });
                }

                foreach (string attachment in System.IO.Directory.GetFiles("./assets/Item/Attachment/None"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = attachment.Substring(30, (attachment.Length - 30 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(attachment),
                        Type = "attachment"
                    });
                }

                foreach (string gear in System.IO.Directory.GetFiles("./assets/Item/Equipment/Backpack"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = gear.Substring(33, (gear.Length - 33 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(gear),
                        Type = "backpack"
                    });
                }

                foreach (string gear in System.IO.Directory.GetFiles("./assets/Item/Equipment/Headgear"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = gear.Substring(33, (gear.Length - 33 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(gear),
                        Type = "headGear"
                    });
                }

                foreach (string gear in System.IO.Directory.GetFiles("./assets/Item/Equipment/Vest"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = gear.Substring(29, (gear.Length - 29 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(gear),
                        Type = "vest"
                    });
                }

                foreach (string item in System.IO.Directory.GetFiles("./assets/Item/Use/Boost"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = item.Substring(24, (item.Length - 24 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(item),
                        Type = "booster"
                    });
                }

                foreach (string item in System.IO.Directory.GetFiles("./assets/Item/Use/Fuel"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = item.Substring(23, (item.Length - 23 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(item),
                        Type = "fuel"
                    });
                }

                foreach (string item in System.IO.Directory.GetFiles("./assets/Item/Use/Heal"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = item.Substring(23, (item.Length - 23 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(item),
                        Type = "heal"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Handgun"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = weapon.Substring(29, (weapon.Length - 30 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "handgun"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Main"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = weapon.Substring(26, (weapon.Length - 26 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "rifle"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Melee"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = weapon.Substring(27, (weapon.Length - 27 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "melee"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Throwable"))
                {
                    context.Images.Add(new Picture()
                    {
                        Name = weapon.Substring(31, (weapon.Length - 31 - 4)),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "throw"
                    });
                }
                context.SaveChanges();
            }
        }
    }
}




