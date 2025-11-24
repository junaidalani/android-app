
import { jameahAdhkarCategories } from '@/data/adhkar';
import AdhkarJameahView from './adhkar-jameah-view';

export async function generateStaticParams() {
  const paths = jameahAdhkarCategories.map((category) => ({
    slug: category.slug,
  }));
  return paths;
}

export default function AdhkarJameahPage() {
  return <AdhkarJameahView />;
}
