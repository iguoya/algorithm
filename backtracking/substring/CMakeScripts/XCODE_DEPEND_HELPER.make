# DO NOT EDIT
# This makefile makes sure all linkable targets are
# up-to-date with anything they link to
default:
	echo "Do not invoke directly"

# Rules to remove targets that are older than anything to which they
# link.  This forces Xcode to relink the targets from scratch.  It
# does not seem to check these dependencies itself.
PostBuild.substring.Debug:
/Users/tiger/algorithm/backtracking/substring/Debug/substring:
	/bin/rm -f /Users/tiger/algorithm/backtracking/substring/Debug/substring


PostBuild.substring.Release:
/Users/tiger/algorithm/backtracking/substring/Release/substring:
	/bin/rm -f /Users/tiger/algorithm/backtracking/substring/Release/substring


PostBuild.substring.MinSizeRel:
/Users/tiger/algorithm/backtracking/substring/MinSizeRel/substring:
	/bin/rm -f /Users/tiger/algorithm/backtracking/substring/MinSizeRel/substring


PostBuild.substring.RelWithDebInfo:
/Users/tiger/algorithm/backtracking/substring/RelWithDebInfo/substring:
	/bin/rm -f /Users/tiger/algorithm/backtracking/substring/RelWithDebInfo/substring




# For each target create a dummy ruleso the target does not have to exist
