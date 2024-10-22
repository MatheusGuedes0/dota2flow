import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Match {
  match_id: number;
  radiant_score: number;
  dire_score: number;
}

export function MatchList() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get<Match[]>(
          'https://api.opendota.com/api/proMatches'
        );
        setMatches(response.data);
      } catch (error) {
        console.error('Erro ao buscar partidas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p className="text-center mt-4">Carregando partidas...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Partidas</h1>
      <ul className="space-y-4">
        {matches.map((match) => (
          <li
            key={match.match_id}
            onClick={() => navigate(`/matches/${match.match_id}`)}
            className="cursor-pointer bg-gray-200 p-4 rounded hover:bg-gray-300"
          >
            <p>
              <strong>ID da Partida:</strong> {match.match_id}
            </p>
            <p>
              <strong>Placar:</strong> Radiant {match.radiant_score} x Dire{' '}
              {match.dire_score}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
