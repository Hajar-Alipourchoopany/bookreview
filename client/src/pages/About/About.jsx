import aboutimg from '../../images/about-img.jpeg';

const About = () => {
  return (
    <section className='about h-screen mt-0 bg-gradient-to-b from-gray-600 to-purple-200 text-gry-900 flex items-center'>
      <div className='container mx-auto flex flex-col md:flex-row items-center'>
        <div className='about-img md:w-1/2'>
          <img
            src={aboutimg}
            alt='About BookHub'
            className='w-full h-full object-cover rounded-lg shadow-lg'
          />
        </div>
        <div className='about-text md:w-1/2 md:ml-8'>
          <h2 className='text-3xl md:text-3xl font-semibold tracking-wide mt-4'>
            About Hajar&Clara co.Publishing
          </h2>
          <p className='text-lg md:text-base leading-relaxed mt-4 opacity-80'>
            Hajar hat einen Server programmiert und ich war für die
            Programmierung der Client-Seite verantwortlich. Heutzutage werden
            viele Produkte hergestellt, und das gilt auch für Bücher. Leser
            wissen oft nicht, welches Buch sie wählen sollen, und Autoren machen
            sich viele Gedanken darüber, zu welchem Thema sie schreiben sollen.
            Deshalb habe ich Rezensionen auf Amazon und Google Books überprüft,
            um herauszufinden, welche Bücher beliebt sind. Und um denjenigen,
            die gerne schreiben möchten, ein wenig zu helfen, habe ich auch ein
            kleines Spiel vorbereitet.
          </p>
          <p className='text-lg md:text-base leading-relaxed mt-4 opacity-80'>
            Zuerst haben wir auf der Website PopularTopics Rezensionen gesammelt
            und den Durchschnitt berechnet. An erster Stelle steht der Roman,
            insbesondere Fantasy-Romane sind bei den Menschen sehr beliebt. Wir
            haben auch herausgefunden, dass Leser Bücher mögen, bei denen sie
            selbst aktiv werden können. Zweitens kann man im Abschnitt
            ReaderReactions anhand von Grafiken die Interessen leicht erkennen.
            Abschließend denke ich, dass Autoren, wenn sie die Vorlieben der
            Leser gut verstehen, diesen besser näherkommen können. Für angehende
            Autoren bieten wir ein sehr einfaches Spiel an. Vielen Dank, dass
            Sie unsere Website besucht haben. Wir wünschen Ihnen eine angenehme
            Zeit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
