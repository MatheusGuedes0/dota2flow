
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, CardFooter } from './Card';

interface Hero {
  id: number;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  icon: string;
}

const HeroCards: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get<Hero[]>(
          'https://api.opendota.com/api/heroes'
        );
        setHeroes(response.data);
      } catch (error) {
        console.error('Erro ao buscar heróis:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  if (loading) return <p className="text-center mt-4">Carregando...</p>;
  if (!heroes.length) return <p>Nenhum herói encontrado.</p>;

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {heroes.map((hero) => (
        <Card key={hero.id} className="hover:scale-105 transform transition-transform">
          <CardHeader>{hero.localized_name}</CardHeader>
          <CardContent>
            <img
              src="/1.jpg"
              alt={hero.localized_name}
              className="w-full h-32 object-contain mx-auto"
            />
            <p className="mt-4 text-center">
              <strong>Atributo:</strong> {hero.primary_attr.toUpperCase()}<br />
              <strong>Ataque:</strong> {hero.attack_type}
            </p>
          </CardContent>
          <CardFooter>Funções: {hero.roles.join(', ')}</CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default HeroCards;
