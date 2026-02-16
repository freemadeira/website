import { Contribute } from '@/components/home/Contribute';
import { AdvisoryBoard, Team } from '@/components/team-and-advisory-board';
import { advisoryBoardMembers } from '@/data/advisoryBoard';
import { teamMembers } from '@/data/team';

export default function TeamAndAdvisoryBoard() {
  return (
    <>
      <Team teamMembers={teamMembers} />
      <AdvisoryBoard AdvisoryBoardMembers={advisoryBoardMembers} />
      <Contribute />
    </>
  );
}
