import AdminNav from '../components/AdminNav';

const EditProfile = () => {
  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Edit your Profile</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Modify your {''}
        <span className="text-indigo-600 font-bold">Information here</span>
      </p>
    </>
  );
};

export default EditProfile;
