using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
[EnableCors("AllowAllHeaders")]
public class MapsController : Controller
{
    [Route("api/v1/maps")]
    [HttpGet]
    public List<byte[]> GetMap()
    {
        var list = new List<byte[]>();
        byte[] b = System.IO.File.ReadAllBytes("./assets/Maps/Erangel_Main_lowres.jpg");
        byte[] b1 = System.IO.File.ReadAllBytes("./assets/Maps/Desert_Main_lowres.jpg");
        list.Add(b);
        list.Add(b1);
        // var memorystream = new MemoryStream();
        // memorystream.Write(b, 0, b.Length);
        // memorystream.Write(b1,0, b1.Length);
        // var images = new List<FileResult>();
        // for(var i = 0; i < list.Count; i++)
        // {
        //     images.Add(File(list[i], "image/jpeg"));   
        // }
        return list;
    }
}