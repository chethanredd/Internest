import User from "../models/User";

/*Read*/
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    req.status(404).json({ message: err.message });
  }
};

export const getUserfriends = async (req, res) => {
    try{
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(user.friends.map(id));
    const formattedFriends = friends.map(({
      _id,
      FirstName,
      LastName,
      occupation,
      picturePath,
      location
    }) => {
        return {_id,
            FirstName,
            LastName,
            occupation,
            picturePath,
            location};
        }
    );
    res.status(200).json(formatedFriends);
    }
    catch (err) {
        req.status(404).json({ message: err.message });
      }
}

/*Update*/

export const addRemoveFriends= async(req,res) =>{
    try{
        const { id , friendId} = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);
        
    }
    catch (err) {
        req.status(404).json({ message: err.message });
      }
    }

