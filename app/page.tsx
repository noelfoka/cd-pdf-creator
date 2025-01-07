// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="lg:hidden">

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Désolé, le CV builder est uniquement disponible sur desktop.</h1>
             {/* <Image src="/emoji.gif" alt="Gift" width={500} height={500} className="mx-auto my-6" />*/}
              <div className="tenor-gif-embed" data-postid="1437772575988315493" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/sorry-im-sorry-im-so-sorry-oops-apologies-gif-1437772575988315493">Sorry Im Sorry Sticker</a>from <a href="https://tenor.com/search/sorry-stickers">Sorry Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
              <p className="py-6">
                Pour creer et personnaliser votre CV, veuillez utiliser un ordinateur. Nous vous remercions de votre compréhension.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
