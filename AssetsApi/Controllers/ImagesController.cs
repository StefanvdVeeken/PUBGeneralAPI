using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Model;
[EnableCors("AllowAllHeaders")]
[Route("api/v1")]
public class ImagesController : Controller
{
    private readonly PicturesContext context;
    public ImagesController(PicturesContext context)
    {
        this.context = context;
    }

    // [Route("items")]
    // [HttpGet]
    // public List<Picture> GetAllImages()
    // {
    //     return context.Images.ToList();
    // }

    [Route("items/{id}")]
    [HttpGet]
    public Picture GetImage(int id)
    {
        return context.Images.Find(id);
    }

    [Route("items")]
    [HttpGet]
    public List<Picture> getFilteredImages(string type)
    {
        IQueryable<Picture> query = context.Images;
        if (type == "all")
        {
            return context.Images.ToList();
        }
        if (type == "weapons")
        {
            query = query.Where(d => d.Type == "handgun" || d.Type == "rifle" || d.Type == "melee" || d.Type == "throw");
        }
        if (type == "use")
        {
            query = query.Where(d => d.Type == "booster" || d.Type == "fuel" || d.Type == "heal");
        }
        if (type == "equipment")
        {
            query = query.Where(d => d.Type == "vest" || d.Type == "headGear" || d.Type == "backpack");
        }
        if (type == "attachments")
        {
            query = query.Where(d => d.Type == "attachment");
        }
        if (type == "maps")
        {
            query = query.Where(d => d.Type == "map");
        }
        if (type == "ammunition")
        {
            query = query.Where(d => d.Type == "ammunition");
        }

        return query.ToList();
    }
}

//     [Route("items/weapons")]
//     [HttpGet]
//     public List<Picture> GetWeapons()
//     {
//         //List<Picture> weapons = new List<Picture>();
//         IQueryable<Picture> query = context.Images;
//         query = query.Where(d => d.Type == "handgun" || d.Type =="rifle" || d.Type == "melee"|| d.Type == "throw");
//         // foreach (Picture c in context.Images)
//         // {
//         //     if (c.Type == "handgun")
//         //     {
//         //         weapons.Add(c);
//         //     }

//         //     if (c.Type == "rifle")
//         //     {
//         //         weapons.Add(c);
//         //     }

//         //     if (c.Type == "melee")
//         //     {
//         //         weapons.Add(c);
//         //     }

//         //     if (c.Type == "throw")
//         //     {
//         //         weapons.Add(c);
//         //     }
//         // }
//         return query.ToList();
//     }


//     [Route("items/use")]
//     [HttpGet]
//     public List<Picture> GetUseItems()
//     {
//         List<Picture> item = new List<Picture>();

//         foreach (Picture c in context.Images)
//         {
//             if (c.Type == "booster")
//             {
//                 item.Add(c);
//             }

//             if (c.Type == "fuel")
//             {
//                 item.Add(c);
//             }

//             if (c.Type == "heal")
//             {
//                 item.Add(c);
//             }
//         }
//         return item;
//     }

//     [Route("items/gear")]
//     [HttpGet]
//     public List<Picture> GetEquipment()
//     {
//         List<Picture> equipment = new List<Picture>();

//         foreach (Picture c in context.Images)
//         {
//             if (c.Type == "vest")
//             {
//                 equipment.Add(c);
//             }

//             if (c.Type == "headGear")
//             {
//                 equipment.Add(c);
//             }

//             if (c.Type == "backpack")
//             {
//                 equipment.Add(c);
//             }
//         }
//         return equipment;
//     }

//     [Route("items/attachments")]
//     [HttpGet]
//     public List<Picture> GetAttachments()
//     {
//         List<Picture> attachmentlist = new List<Picture>();

//         foreach (Picture c in context.Images)
//         {
//             if (c.Type == "attachment")
//             {
//                 attachmentlist.Add(c);
//             }
//         }

//         return attachmentlist;
//     }

//     [Route("items/ammunition")]
//     [HttpGet]
//     public List<Picture> GetAmmo()
//     {
//         List<Picture> ammo = new List<Picture>();

//         foreach (Picture c in context.Images)
//         {
//             if (c.Type == "ammunition")
//             {
//                 ammo.Add(c);
//             }
//         }

//         return ammo;
//     }

//     [Route("items/maps")]
//     [HttpGet]
//     public List<Picture> GetMaps()
//     {
//         List<Picture> maps = new List<Picture>();

//         foreach (Picture c in context.Images)
//         {
//             if (c.Type == "map")
//             {
//                 maps.Add(c);
//             }
//         }

//         return maps;
//     }
// }
