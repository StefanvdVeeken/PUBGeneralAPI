
using System.Collections.Generic;
using System.Linq;

namespace Model
{
    public class DBIntitializer
    {
        public static void Initialize(PicturesContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            if (!context.Maps.Any())
            {
                foreach (string maps in System.IO.Directory.GetFiles("./assets/Maps"))
                {
                    context.Maps.Add(new Picture()
                    {
                        Name = maps.Substring(13),
                        ByteValue = System.IO.File.ReadAllBytes(maps),
                        Type = "map"
                    });
                }
            }

            if (!context.Ammunition.Any())
            {
                foreach (string ammo in System.IO.Directory.GetFiles("./assets/Item/Ammunition/None"))
                {
                    context.Ammunition.Add(new Picture()
                    {
                        Name = ammo.Substring(29),
                        ByteValue = System.IO.File.ReadAllBytes(ammo),
                        Type = "ammunition"
                    });
                }
            }

            if (!context.Attachments.Any())
            {
                foreach (string attachment in System.IO.Directory.GetFiles("./assets/Item/Attachment/None"))
                {
                    context.Attachments.Add(new Picture()
                    {
                        Name = attachment.Substring(29),
                        ByteValue = System.IO.File.ReadAllBytes(attachment),
                        Type = "attachment"
                    });
                }
            }

            if (!context.Equipment.Any())
            {
                foreach (string gear in System.IO.Directory.GetFiles("./assets/Item/Equipment/Backpack"))
                {
                    context.Equipment.Add(new Picture()
                    {
                        Name = gear.Substring(32),
                        ByteValue = System.IO.File.ReadAllBytes(gear),
                        Type = "backpack"
                    });
                }

                foreach (string gear in System.IO.Directory.GetFiles("./assets/Item/Equipment/Headgear"))
                {
                    context.Equipment.Add(new Picture()
                    {
                        Name = gear.Substring(32),
                        ByteValue = System.IO.File.ReadAllBytes(gear),
                        Type = "headGear"
                    });
                }

                foreach (string gear in System.IO.Directory.GetFiles("./assets/Item/Equipment/Vest"))
                {
                    context.Equipment.Add(new Picture()
                    {
                        Name = gear.Substring(28),
                        ByteValue = System.IO.File.ReadAllBytes(gear),
                        Type = "vest"
                    });
                }
            }

            if (!context.UseItems.Any())
            {
                foreach (string item in System.IO.Directory.GetFiles("./assets/Item/Use/Boost"))
                {
                    context.UseItems.Add(new Picture()
                    {
                        Name = item.Substring(23),
                        ByteValue = System.IO.File.ReadAllBytes(item),
                        Type = "booster"
                    });
                }

                foreach (string item in System.IO.Directory.GetFiles("./assets/Item/Use/Fuel"))
                {
                    context.UseItems.Add(new Picture()
                    {
                        Name = item.Substring(22),
                        ByteValue = System.IO.File.ReadAllBytes(item),
                        Type = "fuel"
                    });
                }

                foreach (string item in System.IO.Directory.GetFiles("./assets/Item/Use/Heal"))
                {
                    context.UseItems.Add(new Picture()
                    {
                        Name = item.Substring(22),
                        ByteValue = System.IO.File.ReadAllBytes(item),
                        Type = "heal"
                    });
                }
            }

            if (!context.Weapons.Any())
            {
                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Handgun"))
                {
                    context.Weapons.Add(new Picture()
                    {
                        Name = weapon.Substring(28),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "handgun"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Main"))
                {
                    context.Weapons.Add(new Picture()
                    {
                        Name = weapon.Substring(25),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "rifle"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Melee"))
                {
                    context.Weapons.Add(new Picture()
                    {
                        Name = weapon.Substring(26),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "melee"
                    });
                }

                foreach (string weapon in System.IO.Directory.GetFiles("./assets/Item/Weapon/Throwable"))
                {
                    context.Weapons.Add(new Picture()
                    {
                        Name = weapon.Substring(30),
                        ByteValue = System.IO.File.ReadAllBytes(weapon),
                        Type = "throw"
                    });
                }
            }
            context.SaveChanges();
        }
    }
}




