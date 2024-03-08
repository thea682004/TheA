public class CheckTuoi {
    public String tinhTuoi(int tuoi){
        if (tuoi<18 && tuoi >0){
            return "Tuổi trẻ";
        }else if (tuoi >=18 && tuoi<=55){
            return "Tuổi lao động";
        }else{
            return "Tuổi già";
        }
    }
}
