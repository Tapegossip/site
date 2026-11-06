import EssayCard from '../components/EssayCard';
import { essays } from '../data/essays';
import { usePageTitle } from '../hooks/usePageTitle';

const Essays = () => {
  usePageTitle('Essays');
  return (
  <div className="page-container">
    <h1 className="page-title">Essays</h1>
    <div className="space-y-16 animate-appear">
      {essays.map((essay, index) => (
        <EssayCard key={essay.slug} essay={essay} index={index} />
      ))}
    </div>
  </div>
  );
};

export default Essays;
