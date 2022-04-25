def tournamentWinner(competitions, results):
    # store results
    teams = {}

    # iterate through competitions
    for i in range(len(competitions)):
        # get winning team
        if results[i] == 1:
            winner = competitions[i][0]
        else:
            winner = competitions[i][1]
        # if winner in teams, add 3 to their value
        if winner in teams.keys():
            teams[winner] += 3
        # if they aren't, add winner to teams with a starting value of 3
        else:
            teams[winner] = 3

    # get team with the highest total points and return their name
    victor = ("", 0)
    for i in teams.items():
        if i[1] > victor[1]:
            victor = i

    return victor[0]


competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]
results = [0, 0, 1]
print(tournamentWinner(competitions, results))

def tournamentWinnerV2(competitions, results):
    # store current best team
    currentBestTeam = ""
    scores = {currentBestTeam: 0}

    # iterate through results and competition updating currentBestTeam as we go
    for idx, competition in enumerate(competitions):
        result = results[idx]
        homeTeam, awayTeam = competition

        winningTeam = homeTeam if result == 1 else awayTeam
        
        updateScores(winningTeam, 3, scores)

        if scores[winningTeam] > scores[currentBestTeam]:
            currentBestTeam = winningTeam
        
    return currentBestTeam

def updateScores(team, points, scores):
    if team not in scores:
        scores[team] = 0
    
    scores[team] += points

competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]
results = [0, 0, 1]
print(tournamentWinnerV2(competitions, results))