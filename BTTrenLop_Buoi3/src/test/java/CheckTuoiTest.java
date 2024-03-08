import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class CheckTuoiTest {
    //Viết UnitTest Sử dụng kỹ thuật phân vùng tương đương
    //1. Check tuổi lớn hơn 18 nhỏ hơn 55 là tuổi lao động
    @Test
    public void checkTuoi1(){
    CheckTuoi testResult = new CheckTuoi();
        Assertions.assertEquals("Tuổi lao động", testResult.tinhTuoi(25));
    }
    //2. Check tuổi nằm ngoài phân vùng tuổi lao động
    @Test
    public void checkTuoi2(){
        CheckTuoi testResult = new CheckTuoi();
        Assertions.assertEquals("Tuổi lao động", testResult.tinhTuoi(10));
    }
    //3. Check tuổi nằm ngoài phân vùng tuổi lao động
    @Test
    public void checkTuoi3(){
        CheckTuoi testResult = new CheckTuoi();
        Assertions.assertEquals("Tuổi lao động", testResult.tinhTuoi(80));
    }
    @Test
    public void checkTuoi4(){
        CheckTuoi testResult = new CheckTuoi();
        Assertions.assertEquals("Tuổi trẻ", testResult.tinhTuoi(12));
    }
    @Test
    public void checkTuoi5(){
        CheckTuoi testResult = new CheckTuoi();
        Assertions.assertEquals("Tuổi già", testResult.tinhTuoi(95));
    }

}
