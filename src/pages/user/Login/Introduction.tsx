import DeveloperList from '@/components/Common/DeveloperList';
import { Tabs } from 'antd';
import { useState } from 'react';

const View = {
  TRISOMY: 'TRISOMY',
  THALASSEMIA: 'THALASSEMIA',
  DEVELOPERS: 'DEVELOPERS',
};
function Introduction(props) {
  const [type, setType] = useState<string>(View.TRISOMY);

  return (
    <>
      <Tabs onChange={setType} activeKey={type} tabPosition={'top'} centered>
        <Tabs.TabPane key={View.TRISOMY} tab={<>Trisomy 21, 18, 13</>} />
        <Tabs.TabPane key={View.THALASSEMIA} tab={<>Bệnh Thalassemia</>} />
        <Tabs.TabPane key={View.DEVELOPERS} tab={<>Nhóm phát triển</>} />
      </Tabs>

      {type === View.TRISOMY && (
        <>
          Thể tam nhiễm, Trisomy, là tình trạng cặp nhiễm sắc thể nhất định có thêm một nhiễm sắc
          thể bổ sung.
          <br />
          <br />
          Thể tam nhiễm là một loại đa nhiễm trong đó có ba bản sao của một nhiễm sắc thể, thay vì
          hai bản sao như bình thường. Thể tam nhiễm là một dạng dị bội (bất thường về số lượng
          nhiễm sắc thể).
          <br />
          <br />
          Với đặc điểm như vậy, một người bị mắc thể tam nhiễm sẽ có tổng số 47 nhiễm sắc thể, thay
          vì 46. Nếu các cặp nhiễm sắc thể không phân ly đúng cách trong quá trình phân bào, trứng
          hoặc tinh trùng có thể tạo ra bản sao thứ hai của một trong các nhiễm sắc thể. Nếu một
          giao tử như vậy dẫn đến thụ tinh và tạo thành phôi, thì phôi tạo thành cũng có thể có toàn
          bộ bản sao của nhiễm sắc thể phụ.
          <br />
          <br />
          Hội chứng Down, hội chứng Edwards và hội chứng Patau là những dạng tam nhiễm thường gặp
          nhất. Trẻ em bị ảnh hưởng bởi trisomy thường có một loạt các dị tật bẩm sinh, bao gồm chậm
          phát triển và khuyết tật trí tuệ.
        </>
      )}
      {type === View.THALASSEMIA && (
        <>
          Bệnh tan máu bẩm sinh (thalassemia) là một nhóm bệnh huyết sắc tố gây thiếu máu, tan máu
          di truyền. Mỗi thể bệnh là do bất thường tổng hợp một loại chuỗi globin; Có hai thể bệnh
          chính là alpha thalassemia và beta thalassemia; ngoài ra có các thể phối hợp khác như
          thalassemia và bệnh huyết sắc tố.
        </>
      )}
      {type === View.DEVELOPERS && <DeveloperList orientation={'vertical'} />}
    </>
  );
}

export default Introduction;
