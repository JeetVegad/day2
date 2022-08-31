using System;

namespace Practice1
{
    class Program
    {
        static void Main(string[] args)
        {
            Document doc = new Document();
            doc.Text = "HEllo world";
            //var blogPoster = new BlogPoster();
            var blogDelegate = new Document.SendDoc(BlogPoster.PostBlog);
            doc.ReportSendingResult(blogDelegate);

            //var emailSender = new EmailSender();
            var emailDelegate = new Document.SendDoc(EmailSender.SendEmail);
            doc.ReportSendingResult(emailDelegate);
        }
    }
}
 