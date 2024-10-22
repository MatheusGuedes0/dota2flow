import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Player {
  account_id: number;
  personaname?: string;
  xp_per_min: number;
}

interface MatchData {
  match_id: number;
  players: Player[];
  radiant_team: { name: string };
  dire_team: { name: string };
}

export function Matches() {
  const { matchId } = useParams<{ matchId: string }>();
  const [xpData, setXpData] = useState<number[]>([]);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [radiantTeamName, setRadiantTeamName] = useState<string>('');
  const [direTeamName, setDireTeamName] = useState<string>('');

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      id: 'xp-per-minute',
      type: 'bar',
      background: '#fff',
      toolbar: { show: false },
    },
    title: { text: 'XP por Minuto' },
    xaxis: {
      categories: playerNames,
      title: { text: 'Jogadores' },
    },
    yaxis: {
      title: { text: 'XP por Minuto' },
    },
  };

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await axios.get<MatchData>(
          `https://api.opendota.com/api/matches/${matchId}`
        );

        const players = response.data.players;
        setXpData(players.map((player) => player.xp_per_min));

        setRadiantTeamName(response.data.radiant_team.name);
        setDireTeamName(response.data.dire_team.name);

        // Se 'personaname' não estiver disponível, exibe o 'account_id'
        const names = players.map(
          (player) => player.personaname || `ID: ${player.account_id}`
        );
        setPlayerNames(names);
      } catch (error) {
        console.error('Erro ao buscar dados da partida:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchData();
  }, [matchId]);

  if (loading) return <p>Carregando dados...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Times</h2>
      <p className="mb-2"><strong>Radiant:</strong> {radiantTeamName}</p>
      <p className="mb-4"><strong>Dire:</strong> {direTeamName}</p>
      <Chart
        options={chartOptions}
        series={[{ name: 'XP por Minuto', data: xpData }]}
        type="bar"
        height={300}
      />
    </div>
  );
}
